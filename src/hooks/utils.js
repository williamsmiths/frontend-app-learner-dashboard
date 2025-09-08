import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import dateFormatter from 'utils/dateFormatter';

export const useValueCallback = (cb, prereqs = []) => (
  React.useCallback(e => cb(e.target.value), prereqs) // eslint-disable-line
);

export const useFormatDate = () => {
  return (date) => {
    if (!date) return '';
    const d = new Date(date);
    return new Intl.DateTimeFormat('vi-VN', {
      year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(d);
  };
};

export default {
  useFormatDate,
  useValueCallback,
};
