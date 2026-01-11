/**
 * Arena Breakout Infinite - Player Settings
 *
 * This file contains comprehensive player settings including:
 * - Codes: Game settings import/export codes
 * - Mouse: Mouse hardware and sensitivity settings
 * - Monitor: Display hardware specifications
 *
 * All fields are optional - only filled fields will be displayed
 */

export const settingCategories = ['Game', 'Image', 'Sound', 'Post-Processing', 'Control', 'Privacy'];

export const scopeTypes = ['1X', '1.6X', '2X', '2.5X', '3X', '3.5X', '4X', '5X', '6X', '6.5X', '7X', '10X', '16X', '20X'];

export const playersSettings = [
	{
		id: 'wexm3',
		name: 'wexm3',
		avatar: '/avatars/wexm3.svg',
		lastUpdated: '2026-01-11',

		// Settings Codes
		codes: {
			'Game': 'Game-3fCXsO4HcCqwbb444',
			'PostProcessing': 'PostProcessing-3fCXsO4HcCqwbb4P4',
			'Control': 'Control-3fCXsO4HcCqwbb4b4'
		},

		// Mouse Settings
		mouse: {
			model: 'EWEADN S9 Max',
			dpi: '800',
			pollingRate: 8000,
			mouseSensitivity: 0.21,
			aimSensitivity: 0.17,
			freeCameraSensitivity: 1.00
		},

		// Monitor Settings
		monitor: {
			model: 'Xiaomi Curved 34',
			resolution: '2880x1440',
			refreshRate: 144
		}
	},
	{
		id: 'd1eos',
		name: 'd1eos',
		avatar: '/avatars/d1eos.svg',
		lastUpdated: '2026-01-11',

		// Only codes, no mouse/monitor info yet
		codes: {
			'Game': 'Game-3f5kEL0Uj6xHob4f4',
			'PostProcessing': 'PostProcessing-3f5kEL0Uj6xHob4o4',
			'Control': 'Control-3f5kEL0Uj6xHob4z4'
		},

		// Example: partial mouse settings
		mouse: {
			model: 'Logitech G502 Hero',
			dpi: '2000',
			pollingRate: 1000,
			mouseSensitivity: 0.17,
			aimSensitivity: 0.17,
			scopeSensitivities: {
				'6X': 0.80,
				'7X': 0.70
			},
			freeCameraSensitivity: 0.50
			// No scope sensitivities or aim sensitivity filled
		},
		monitor: {
			model: 'Huawei MateView 34',
			resolution: '2880x1440',
			refreshRate: 165
		}

	}
];
