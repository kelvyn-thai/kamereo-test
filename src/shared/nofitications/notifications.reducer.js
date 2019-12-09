import * as Types from './notifications.constant';

export default (
	state = {
		toggle: false,
		data: null
	},
	action
) => {
	if (action.type === Types.ACTION_TOGGLE_NOTIFICATIONS) {
		return { ...state, ...action.payload };
	}
	return state;
};
