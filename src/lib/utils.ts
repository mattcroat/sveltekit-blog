export function formatDate(date: string) {
	return new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	}).format(new Date(date))
}
