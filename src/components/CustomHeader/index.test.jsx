import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { IntlProvider } from "@edx/frontend-platform/i18n";
import { AppContext } from "@edx/frontend-platform/react";
import { getConfig } from "@edx/frontend-platform";
import CustomHeader from "./index";

// Mock config
jest.mock("@edx/frontend-platform", () => ({
  getConfig: jest.fn(() => ({
    LOGO_URL: "http://example.com/logo.png",
    SITE_NAME: "Test Site",
    ACCOUNT_PROFILE_URL: "http://example.com/profile",
    ACCOUNT_SETTINGS_URL: "http://example.com/account",
    ORDER_HISTORY_URL: "http://example.com/orders",
    LOGOUT_URL: "http://example.com/logout",
    SUPPORT_URL: "http://example.com/support",
  })),
}));

const mockContextValue = {
  authenticatedUser: {
    userId: 123,
    username: "testuser",
    email: "test@example.com",
    name: "Test User",
    avatar: "http://example.com/avatar.jpg",
  },
  config: getConfig(),
};

const mockMainMenuItems = [
  {
    type: "item",
    href: "/",
    content: "Courses",
    isActive: true,
  },
  {
    type: "item",
    href: "/programs",
    content: "Programs",
  },
  {
    type: "item",
    href: "/discover",
    content: "Discover New",
    onClick: jest.fn(),
  },
];

const mockSecondaryMenuItems = [
  {
    type: "item",
    href: "/support",
    content: "Help",
  },
];

const mockUserMenuItems = [
  {
    heading: "",
    items: [
      {
        type: "item",
        href: "/profile",
        content: "Profile",
      },
      {
        type: "item",
        href: "/account",
        content: "Account",
      },
    ],
  },
  {
    heading: "",
    items: [
      {
        type: "item",
        href: "/logout",
        content: "Sign Out",
      },
    ],
  },
];

const renderCustomHeader = (props = {}) => {
  return render(
    <IntlProvider locale="en">
      <AppContext.Provider value={mockContextValue}>
        <CustomHeader
          mainMenuItems={mockMainMenuItems}
          secondaryMenuItems={mockSecondaryMenuItems}
          userMenuItems={mockUserMenuItems}
          {...props}
        />
      </AppContext.Provider>
    </IntlProvider>
  );
};

describe("CustomHeader", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Desktop Navigation", () => {
    test("renders logo correctly", () => {
      renderCustomHeader();

      const logo = screen.getByRole("img", { name: /Test Site Dashboard/i });
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute("src", "http://example.com/logo.png");
    });

    test("renders main menu items", () => {
      renderCustomHeader();

      expect(screen.getByText("Courses")).toBeInTheDocument();
      expect(screen.getByText("Programs")).toBeInTheDocument();
      expect(screen.getByText("Discover New")).toBeInTheDocument();
    });

    test("renders secondary menu items", () => {
      renderCustomHeader();

      expect(screen.getByText("Help")).toBeInTheDocument();
    });

    test("shows active menu item correctly", () => {
      renderCustomHeader();

      const coursesLink = screen.getByText("Courses").closest("a");
      expect(coursesLink.parentElement).toHaveClass("custom-header__menu-item--active");
    });

    test("renders user menu when authenticated", () => {
      renderCustomHeader();

      expect(screen.getByText("testuser")).toBeInTheDocument();
      expect(screen.getByRole("img", { name: /testuser avatar/i })).toBeInTheDocument();
    });
  });

  describe("User Menu Interactions", () => {
    test("toggles user menu on click", async () => {
      renderCustomHeader();

      const userToggle = screen.getByRole("button", { name: /User menu/i });

      // Menu should be closed initially
      expect(screen.queryByText("Profile")).not.toBeInTheDocument();

      // Click to open menu
      fireEvent.click(userToggle);

      await waitFor(() => {
        expect(screen.getByText("Profile")).toBeInTheDocument();
        expect(screen.getByText("Account")).toBeInTheDocument();
        expect(screen.getByText("Sign Out")).toBeInTheDocument();
      });

      // Click again to close menu
      fireEvent.click(userToggle);

      await waitFor(() => {
        expect(screen.queryByText("Profile")).not.toBeInTheDocument();
      });
    });

    test("closes user menu when clicking outside", async () => {
      renderCustomHeader();

      const userToggle = screen.getByRole("button", { name: /User menu/i });
      fireEvent.click(userToggle);

      await waitFor(() => {
        expect(screen.getByText("Profile")).toBeInTheDocument();
      });

      // Click outside
      fireEvent.mouseDown(document.body);

      await waitFor(() => {
        expect(screen.queryByText("Profile")).not.toBeInTheDocument();
      });
    });

    test("closes user menu on escape key", async () => {
      renderCustomHeader();

      const userToggle = screen.getByRole("button", { name: /User menu/i });
      fireEvent.click(userToggle);

      await waitFor(() => {
        expect(screen.getByText("Profile")).toBeInTheDocument();
      });

      // Press escape
      fireEvent.keyDown(document, { key: "Escape" });

      await waitFor(() => {
        expect(screen.queryByText("Profile")).not.toBeInTheDocument();
      });
    });
  });

  describe("Mobile Menu", () => {
    test("shows mobile menu toggle button", () => {
      renderCustomHeader();

      const mobileToggle = screen.getByRole("button", { name: /Open menu/i });
      expect(mobileToggle).toBeInTheDocument();
    });

    test("toggles mobile menu on click", async () => {
      renderCustomHeader();

      const mobileToggle = screen.getByRole("button", { name: /Open menu/i });

      // Click to open mobile menu
      fireEvent.click(mobileToggle);

      expect(mobileToggle).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByRole("button", { name: /Close menu/i })).toBeInTheDocument();

      // Mobile menu should show all menu items
      await waitFor(() => {
        const mobileMenu = document.querySelector(".custom-header__mobile-menu");
        expect(mobileMenu).toBeInTheDocument();
      });
    });

    test("closes mobile menu when clicking outside", async () => {
      renderCustomHeader();

      const mobileToggle = screen.getByRole("button", { name: /Open menu/i });
      fireEvent.click(mobileToggle);

      await waitFor(() => {
        const mobileMenu = document.querySelector(".custom-header__mobile-menu");
        expect(mobileMenu).toBeInTheDocument();
      });

      // Click outside
      fireEvent.mouseDown(document.body);

      await waitFor(() => {
        const mobileMenu = document.querySelector(".custom-header__mobile-menu");
        expect(mobileMenu).not.toBeInTheDocument();
      });
    });
  });

  describe("Menu Item Clicks", () => {
    test("calls onClick handler when provided", () => {
      renderCustomHeader();

      const discoverLink = screen.getByText("Discover New");
      fireEvent.click(discoverLink);

      expect(mockMainMenuItems[2].onClick).toHaveBeenCalled();
    });

    test("navigates normally when no onClick handler", () => {
      renderCustomHeader();

      const coursesLink = screen.getByText("Courses");
      expect(coursesLink.closest("a")).toHaveAttribute("href", "/");

      const programsLink = screen.getByText("Programs");
      expect(programsLink.closest("a")).toHaveAttribute("href", "/programs");
    });
  });

  describe("Accessibility", () => {
    test("has proper ARIA attributes", () => {
      renderCustomHeader();

      const header = screen.getByRole("banner");
      expect(header).toBeInTheDocument();

      const nav = screen.getAllByRole("navigation");
      expect(nav.length).toBeGreaterThan(0);

      const userToggle = screen.getByRole("button", { name: /User menu/i });
      expect(userToggle).toHaveAttribute("aria-expanded", "false");
      expect(userToggle).toHaveAttribute("aria-haspopup", "true");
    });

    test("supports keyboard navigation", async () => {
      renderCustomHeader();

      const userToggle = screen.getByRole("button", { name: /User menu/i });

      // Focus and press Enter
      userToggle.focus();
      fireEvent.keyDown(userToggle, { key: "Enter" });

      await waitFor(() => {
        expect(userToggle).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByText("Profile")).toBeInTheDocument();
      });
    });
  });

  describe("Fallback Behavior", () => {
    test("shows site name when no logo URL", () => {
      // Mock config without logo
      getConfig.mockReturnValueOnce({
        SITE_NAME: "Test Site",
        LOGO_URL: null,
      });

      renderCustomHeader();

      expect(screen.getByText("Test Site")).toBeInTheDocument();
      expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });

    test("shows avatar placeholder when user has no avatar", () => {
      const contextWithoutAvatar = {
        ...mockContextValue,
        authenticatedUser: {
          ...mockContextValue.authenticatedUser,
          avatar: null,
        },
      };

      render(
        <IntlProvider locale="en">
          <AppContext.Provider value={contextWithoutAvatar}>
            <CustomHeader
              mainMenuItems={mockMainMenuItems}
              secondaryMenuItems={mockSecondaryMenuItems}
              userMenuItems={mockUserMenuItems}
            />
          </AppContext.Provider>
        </IntlProvider>
      );

      expect(screen.getByText("T")).toBeInTheDocument(); // First letter of username
    });
  });

  describe("Edge Cases", () => {
    test("renders without menu items", () => {
      renderCustomHeader({
        mainMenuItems: [],
        secondaryMenuItems: [],
        userMenuItems: [],
      });

      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    test("renders without authenticated user", () => {
      const contextWithoutUser = {
        ...mockContextValue,
        authenticatedUser: null,
      };

      render(
        <IntlProvider locale="en">
          <AppContext.Provider value={contextWithoutUser}>
            <CustomHeader
              mainMenuItems={mockMainMenuItems}
              secondaryMenuItems={mockSecondaryMenuItems}
              userMenuItems={mockUserMenuItems}
            />
          </AppContext.Provider>
        </IntlProvider>
      );

      expect(screen.queryByText("testuser")).not.toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /User menu/i })).not.toBeInTheDocument();
    });
  });
});
