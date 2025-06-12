export function getStatus(
  status: 'Active' | 'Legacy' | 'Discontinued',
): string {
  if (status === 'Active') {
    return '운영중';
  } else if (status === 'Legacy') {
    return '운영 종료';
  } else if (status === 'Discontinued') {
    return '운영 중단';
  }
  return '';
}
