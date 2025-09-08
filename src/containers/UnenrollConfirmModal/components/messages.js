/* eslint-disable quotes */
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  confirmHeader: {
    id: 'learner-dash.unenrollConfirm.confirm.header',
    description: 'Header for confirm unenroll modal',
    defaultMessage: 'Hủy đăng ký khóa học?',
  },
  confirmCancel: {
    id: 'learner-dash.unenrollConfirm.confirm.cancel',
    description: 'Cancel action for confirm unenroll modal',
    defaultMessage: 'Để sau',
  },
  confirmUnenroll: {
    id: 'learner-dash.unenrollConfirm.confirm.unenroll',
    description: 'Confirm action for confirm unenroll modal',
    defaultMessage: 'Hủy đăng ký',
  },
  reasonHeading: {
    id: 'learner-dash.unenrollConfirm.confirm.reason.heading',
    description: 'Heading for unenroll reason modal',
    defaultMessage: 'Lý do chính của bạn khi hủy đăng ký là gì?',
  },
  reasonSkip: {
    id: 'learner-dash.unenrollConfirm.confirm.reason.skip',
    description: 'Skip action for unenroll reason modal',
    defaultMessage: 'Bỏ qua khảo sát',
  },
  reasonSubmit: {
    id: 'learner-dash.unenrollConfirm.confirm.reason.submit',
    description: 'Submit action for unenroll reason modal',
    defaultMessage: 'Gửi lý do',
  },
  finishHeading: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.heading',
    description: 'Heading for unenroll finish modal',
    defaultMessage: 'Bạn đã hủy đăng ký',
  },
  finishThanksText: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.thanks-text',
    description: 'Thank you message on unenroll modal for providing a reason',
    defaultMessage: 'Cảm ơn bạn đã chia sẻ lý do hủy đăng ký.',
  },
  finishText: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.text',
    description: 'Text for unenroll finish modal',
    defaultMessage: 'Khóa học này sẽ bị xóa khỏi bảng điều khiển của bạn.',
  },
  finishReturn: {
    id: 'learner-dash.unenrollConfirm.confirm.finish.return',
    description: 'Return action for unenroll finish modal',
    defaultMessage: 'Quay về bảng điều khiển',
  },
});

export default messages;
