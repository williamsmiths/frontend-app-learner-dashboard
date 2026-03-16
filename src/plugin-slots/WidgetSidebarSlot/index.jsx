import React from 'react';

import { PluginSlot } from '@openedx/frontend-plugin-framework';
import LookingForChallengeWidget from 'widgets/LookingForChallengeWidget';

// eslint-disable-next-line arrow-body-style
export const WidgetSidebarSlot = () => (
  <PluginSlot
    id="org.openedx.frontend.learner_dashboard.widget_sidebar.v1"
    idAliases={['widget_sidebar_slot']}
  >
    <div className="mb-2 text-dark fs-5" style={{ fontWeight: '700' }}>
      Khóa học được đề xuất cho bạn
    </div>

    <LookingForChallengeWidget />
  </PluginSlot>
);

export default WidgetSidebarSlot;
