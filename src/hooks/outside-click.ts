import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				callback();
			}
		};

		document.addEventListener("mousedown", handleClick);

		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [ref]);

	return ref;
}