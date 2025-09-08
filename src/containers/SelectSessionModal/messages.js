/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  changeOrLeaveHeader: {
    id: 'learner-dash.selectSession.changeOrLeaveHeader',
    description: 'Header for session that allow leave option',
    defaultMessage: 'Đổi hoặc rời phiên học?',
  },
  selectSessionHeader: {
    id: 'learner-dash.selectSession.selectSessionHeader',
    description: 'Header for unfulfilled entitlement',
    defaultMessage: 'Chọn một phiên học',
  },
  changeOrLeaveHint: {
    id: 'learner-dash.selectSession.changeOrLeaveHint',
    description: 'Hint for session that allow leave option',
    defaultMessage:
      'Khi bạn chuyển sang một phiên học khác, mọi tiến trình hoặc điểm số trong phiên hiện tại sẽ bị mất.',
  },
  selectSessionHint: {
    id: 'learner-dash.selectSession.selectSessionHint',
    description: 'Hint for session that does not allow leave option',
    defaultMessage:
      'Hãy nhớ rằng, nếu đổi ý bạn có 2 tuần để hủy ghi danh và chọn một phiên học khác.',
  },
  leaveSessionOption: {
    id: 'learner-dash.selectSession.leaveSessionOption',
    description: 'Radio option for leave session',
    defaultMessage: 'Rời phiên học',
  },
  nevermind: {
    id: 'learner-dash.selectSession.nevermind',
    description: 'Cancel action for select session modal',
    defaultMessage: 'Để sau',
  },
  confirmSession: {
    id: 'learner-dash.selectSession.confirmSession',
    description: 'Confirm action for select session modal',
    defaultMessage: 'Xác nhận phiên học',
  },
});

export default messages;
