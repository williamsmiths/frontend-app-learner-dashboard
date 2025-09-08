import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  accessExpired: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpired',
    description: 'Course access expiration date message on course card for expired access.',
    defaultMessage: 'Quyền truy cập đã hết hạn vào ngày {accessExpirationDate}',
  },
  accessExpires: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpires',
    description: 'Course access expiration date message on course card.',
    defaultMessage: 'Quyền truy cập sẽ hết hạn vào ngày {accessExpirationDate}',
  },
  courseEnded: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnded',
    description: 'Course ended message on course card.',
    defaultMessage: 'Khóa học đã kết thúc vào ngày {endDate}',
  },
  courseEnds: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnds',
    description: 'Course ending message on course card.',
    defaultMessage: 'Khóa học sẽ kết thúc vào ngày {endDate}',
  },
  courseStarts: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseStarts',
    description: 'Course start date message on course card.',
    defaultMessage: 'Khóa học bắt đầu vào ngày {startDate}',
  },
  unknownProviderName: {
    id: 'learner-dash.courseCard.CourseCardDetails.unknownProviderName',
    description: 'Provider name display when name is unknown',
    defaultMessage: 'Không rõ',
  },
  changeOrLeaveSessionButton: {
    id: 'learner-dash.courseCard.CourseCardDetails.changeOrLeaveSessionButton',
    description: 'Button for trigger change or leave session for entitlement course',
    defaultMessage: 'Thay đổi hoặc rời session',
  },
});

export default messages;
