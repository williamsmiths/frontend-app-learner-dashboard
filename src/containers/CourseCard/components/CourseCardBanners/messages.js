import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  auditAccessExpired: {
    id: 'learner-dash.courseCard.banners.auditAccessExpired',
    description: 'Audit access expiration banner message',
    defaultMessage: 'Quyền truy cập audit của bạn cho khóa học này đã hết hạn.',
  },
  findAnotherCourse: {
    id: 'learner-dash.courseCard.banners.findAnotherCourse',
    description: 'Action prompt taking learners to course exploration',
    defaultMessage: 'Tìm khóa học khác',
  },
  certRestricted: {
    id: 'learner-dash.courseCard.banners.certificateRestricted',
    description: 'Restricted certificate warning message',
    defaultMessage: 'Chứng chỉ của bạn đang bị giữ lại để xác nhận rằng việc cấp chứng chỉ tuân thủ các lệnh cấm nghiêm ngặt của Hoa Kỳ đối với Iran, Cuba, Syria và Sudan. Nếu bạn cho rằng hệ thống đã xác định nhầm, vui lòng liên hệ {supportEmail}.',
  },
  certRestrictedNoEmail: {
    id: 'learner-dash.courseCard.banners.certificateRestrictedNoEmail',
    description: 'Restricted certificate warning message',
    defaultMessage: 'Chứng chỉ của bạn đang bị giữ lại để xác nhận rằng việc cấp chứng chỉ tuân thủ các lệnh cấm nghiêm ngặt của Hoa Kỳ đối với Iran, Cuba, Syria và Sudan. Nếu bạn cho rằng hệ thống đã xác định nhầm, vui lòng cho chúng tôi biết.',
  },
  certRefundContactBilling: {
    id: 'learner-dash.courseCard.banners.certificateRefundContactBilling',
    description: 'Message to learners to contact billing for certificate refunds',
    defaultMessage: 'Nếu bạn muốn hoàn tiền cho chứng chỉ, vui lòng liên hệ bộ phận thanh toán: {billingEmail}',
  },
  certRefundContactBillingNoEmail: {
    id: 'learner-dash.courseCard.banners.certificateRefundContactBillingNoEmail',
    description: 'Message to learners to contact billing for certificate refunds',
    defaultMessage: 'Nếu bạn muốn hoàn tiền cho chứng chỉ, vui lòng liên hệ với chúng tôi.',
  },
  passingGrade: {
    id: 'learner-dash.courseCard.banners.passingGrade',
    description: 'Message to learners with minimum passing grade for the course',
    defaultMessage: 'Điểm tối thiểu để hoàn thành khóa học: {minPassingGrade}%',
  },
  notEligibleForCert: {
    id: 'learner-dash.courseCard.banners.notEligibleForCert',
    description: 'Certificate inelligibility message',
    defaultMessage: 'Bạn không đủ điều kiện nhận chứng chỉ.',
  },
  viewGrades: {
    id: 'learner-dash.courseCard.banners.viewGrades',
    description: 'Gradses link text',
    defaultMessage: 'Xem điểm.',
  },
  certReady: {
    id: 'learner-dash.courseCard.banners.certReady',
    description: 'Certificate ready message',
    defaultMessage: 'Chúc mừng! Chứng chỉ của bạn đã sẵn sàng.',
  },
  viewCertificate: {
    id: 'learner-dash.courseCard.banners.viewCertificate',
    description: 'Certificate link text',
    defaultMessage: 'Xem chứng chỉ.',
  },
  certMinGrade: {
    id: 'learner-dash.courseCard.banners.certMinGrade',
    description: 'Passing grade requirement message',
    defaultMessage: 'Điểm tối thiểu để nhận chứng chỉ: {minPassingGrade}%',
  },
  downloadCertificate: {
    id: 'learner-dash.courseCard.banners.downloadCertificate',
    description: 'Certificate download link text',
    defaultMessage: 'Tải chứng chỉ.',
  },
  gradeAndCertReadyAfter: {
    id: 'learner-dash.courseCard.banners.gradseAndCertReadyAfter',
    description: 'Grade and certificate availability date message',
    defaultMessage: 'Điểm và chứng chỉ của bạn sẽ sẵn sàng sau {availableDate}.',
  },
  entitlementUnavailable: {
    id: 'learner-dash.courseCard.banners.entitlementUnavailable',
    description: 'Entitlement course message when no sessions are available',
    defaultMessage: 'Hiện tại không có session nào khả dụng. Nhóm khóa học sẽ tạo session mới sớm. Nếu không có session xuất hiện, vui lòng liên hệ {emailLink} để biết thêm thông tin.',
  },
  entitlementExpiringSoon: {
    id: 'learner-dash.courseCard.banners.entitlementExpiringSoon',
    description: 'Entitlement course message when the entitlement is expiring soon.',
    defaultMessage: 'Bạn phải {selectSessionButton} trước {changeDeadline} để truy cập khóa học.',
  },
  entitlementExpired: {
    id: 'learner-dash.courseCard.banners.entitlementExpired',
    description: 'Entitlement course message when the entitlement is expired.',
    defaultMessage: 'Bạn không còn có thể thay đổi session.',
  },
  selectSession: {
    id: 'learner-dash.courseCard.banners.selectSession',
    description: 'Entitlement session selection link text',
    defaultMessage: 'chọn một session',
  },
  prerequisitesNotMet: {
    id: 'learner-dash.courseCard.banners.prerequisitesNotMet',
    description: 'Message to learners with unmet prerequisites',
    defaultMessage: 'Bạn chưa thể truy cập khóa học này vì chưa hoàn thành các điều kiện tiên quyết.',
  },
  courseHasNotStarted: {
    id: 'learner-dash.courseCard.banners.courseHasNotStarted',
    description: 'Course has not started message',
    defaultMessage: 'Bạn chưa thể truy cập khóa học này vì khóa học chưa bắt đầu. Khóa học sẽ bắt đầu vào {startDate}.',
  },
});

export default messages;
