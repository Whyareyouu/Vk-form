export const generateUniqueID = (): string => {
	return `${(~~(Math.random() * 1e8)).toString(16)}`;
};
