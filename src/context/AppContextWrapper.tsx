import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

type ContextStoreType = {
	toggleDark: () => void;
	openMenu: () => void;
	closeMenu: () => void;
	isDark: boolean;
	isMenuOpen: boolean;
};

const appContext = createContext<ContextStoreType>({
	isDark: true,
	isMenuOpen: true,
	toggleDark() {},
	openMenu() {},
	closeMenu() {},
});

export const useStore = () => {
	return useContext(appContext);
};

const initDark = () => {
	const dark = localStorage.getItem('theme');
	if (dark) {
		return JSON.parse(dark);
	} else {
		return true;
	}
};

const AppContextWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isDark, setisDark] = useState<boolean>(initDark());
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleDark = () => {
		setisDark((p) => !p);
	};
	const openMenu = () => {
		setIsMenuOpen(true);
	};
	const closeMenu = () => {
		setIsMenuOpen(false);
	};
	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(isDark));
		if (isDark) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDark]);
	console.log(isMenuOpen);

	const ctx = {
		isDark,
		isMenuOpen,
		toggleDark,
		openMenu,
		closeMenu,
	};
	return <appContext.Provider value={ctx}>{children}</appContext.Provider>;
};

export default AppContextWrapper;
