/**
 * Safe localStorage wrapper with try-catch
 * Prevents errors when localStorage is blocked/unavailable
 */

export const storage = {
	/**
	 * Get item from localStorage
	 * @param {string} key
	 * @param {any} defaultValue - Value to return if key doesn't exist or error occurs
	 * @returns {any}
	 */
	get(key, defaultValue = null) {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : defaultValue;
		} catch (error) {
			console.warn(`Failed to get localStorage item "${key}":`, error);
			return defaultValue;
		}
	},

	/**
	 * Set item in localStorage
	 * @param {string} key
	 * @param {any} value
	 * @returns {boolean} Success status
	 */
	set(key, value) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			return true;
		} catch (error) {
			console.warn(`Failed to set localStorage item "${key}":`, error);
			return false;
		}
	},

	/**
	 * Remove item from localStorage
	 * @param {string} key
	 * @returns {boolean} Success status
	 */
	remove(key) {
		try {
			localStorage.removeItem(key);
			return true;
		} catch (error) {
			console.warn(`Failed to remove localStorage item "${key}":`, error);
			return false;
		}
	},

	/**
	 * Clear all items from localStorage
	 * @returns {boolean} Success status
	 */
	clear() {
		try {
			localStorage.clear();
			return true;
		} catch (error) {
			console.warn('Failed to clear localStorage:', error);
			return false;
		}
	},

	/**
	 * Check if key exists in localStorage
	 * @param {string} key
	 * @returns {boolean}
	 */
	has(key) {
		try {
			return localStorage.getItem(key) !== null;
		} catch {
			return false;
		}
	}
};
