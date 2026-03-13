/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  changeOrLeaveHeader: {
    id: 'learner-dash.selectSession.changeOrLeaveHeader',
    description: 'Header for session that allow leave option',
    defaultMessage: 'Thay đổi hoặc rời buổi học?',
  },
  selectSessionHeader: {
    id: 'learner-dash.selectSession.selectSessionHeader',
    description: 'Header for unfulfilled entitlement',
    defaultMessage: 'Chọn một buổi học',
  },
  changeOrLeaveHint: {
    id: 'learner-dash.selectSession.changeOrLeaveHint',
    description: 'Hint for session that allow leave option',
    defaultMessage: 'Khi bạn chuyển sang buổi học khác, mọi tiến trình khóa học hoặc điểm số từ buổi học hiện tại sẽ bị mất.',
  },
  selectSessionHint: {
    id: 'learner-dash.selectSession.selectSessionHint',
    description: 'Hint for session that does not allow leave option',
    defaultMessage: 'Hãy nhớ rằng, nếu bạn thay đổi ý định, bạn có 2 tuần để hủy đăng ký và chọn một buổi học khác.',
  },
  leaveSessionOption: {
    id: 'learner-dash.selectSession.leaveSessionOption',
    description: 'Radio option for leave session',
    defaultMessage: 'Rời buổi học',
  },
  nevermind: {
    id: 'learner-dash.selectSession.nevermind',
    description: 'Cancel action for select session modal',
    defaultMessage: 'Thôi',
  },
  confirmSession: {
    id: 'learner-dash.selectSession.confirmSession',
    description: 'Confirm action for select session modal',
    defaultMessage: 'Xác nhận buổi học',
  },
});

export default messages;
