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
		lastUpdated: '2026-01-06',

		// Settings Codes
		codes: {
			'Game': 'EXAMPLE_CODE_12345678901234',
			'Image': 'EXAMPLE_CODE_12345678901234',
			'Sound': 'EXAMPLE_CODE_12345678901234',
			'Post-Processing': 'EXAMPLE_CODE_12345678901234',
			'Control': 'EXAMPLE_CODE_12345678901234',
			'Privacy': 'EXAMPLE_CODE_12345678901234'
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
		lastUpdated: '2026-01-06',

		// Only codes, no mouse/monitor info yet
		codes: {
			'Game': 'D1EOS_GAME_CODE_9876543210',
			'Image': 'D1EOS_IMAGE_CODE_9876543210',
			'Sound': 'D1EOS_SOUND_CODE_9876543210'
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
