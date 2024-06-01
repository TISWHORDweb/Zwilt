export const SHOW_DESCRIPTION = 'SHOW_DESCRIPTION';
export const HIDE_ALL_DESCRIPTIONS = 'HIDE_ALL_DESCRIPTIONS';

export const showDescription = (step) => ({ type: SHOW_DESCRIPTION, step });
export const hideAllDescriptions = () => ({ type: HIDE_ALL_DESCRIPTIONS });
