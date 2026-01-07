/**
 * Announcements/Banners configuration
 * Add/remove announcements here - they will automatically show/hide based on dates
 */

export const announcements = [
	// {
	// 	id: 'abi-season-4-missions-launch',
	// 	type: 'info', // 'info', 'success', 'warning', 'error'
	// 	message: 'Arena Breakout: Infinite - Season 4 missions are done!',
	// 	link: '/abi/s4-missions',
	// 	linkText: 'View missions',
	// 	// startDate: '2026-01-08',
	// 	// endDate: '2026-01-10',
	// 	dismissible: true, // Can user close it?
	// }
];

/**
 * Get active announcements for current date
 * Checks startDate/endDate and localStorage for dismissed announcements
 */
export function getActiveAnnouncements() {
	const now = new Date();
	const today = now.toISOString().split('T')[0];

	return announcements.filter((announcement) => {
		// Check date range
		const isActive =
			(!announcement.startDate || today >= announcement.startDate) &&
			(!announcement.endDate || today <= announcement.endDate);

		if (!isActive) return false;

		// Check if dismissed (client-side only)
		if (typeof window !== 'undefined' && announcement.dismissible) {
			const dismissed = localStorage.getItem(`announcement-dismissed-${announcement.id}`);
			return !dismissed;
		}

		return true;
	});
}
