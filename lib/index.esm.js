class e {
	#e;
	constructor(e) {
		this.#e = e;
	}
	apply(e) {
		Object.entries(e).forEach(([e, t]) => {
			if ('role' === e) return void this.#e.setAttribute('role', t);
			const n = `aria-${e.toLowerCase()}`;
			this.#e.setAttribute(n, t);
		});
	}
}
class t {
	#e;
	constructor(e) {
		this.#e = e;
	}
	apply(e) {
		const { children: t = [] } = e;
		if (!Array.isArray(t)) throw new Error('children must be an array');
		t.forEach((e) => {
			if (!(e instanceof HTMLElement)) throw new Error('Each child must be an HTML element');
			this.#e.appendChild(e);
		});
	}
}
class n {
	#e;
	constructor(e) {
		this.#e = e;
	}
	apply(e) {
		Object.entries(e).forEach(([e, t]) => {
			const n = e.toLowerCase().replace(/^on/, '');
			this.#e.addEventListener(n, t);
		});
	}
}
class s {
	#e;
	static #t = new Set([
		'allowfullscreen',
		'async',
		'autofocus',
		'autoplay',
		'checked',
		'controls',
		'default',
		'defer',
		'disabled',
		'formnovalidate',
		'hidden',
		'ismap',
		'loop',
		'multiple',
		'muted',
		'nomodule',
		'novalidate',
		'open',
		'playsinline',
		'readonly',
		'required',
		'reversed',
		'selected'
	]);
	constructor(e) {
		this.#e = e;
	}
	apply(e) {
		Object.entries(e).forEach(([e, t]) => {
			s.#t.has(e.toLowerCase()) && (t ? this.#e.setAttribute(e, '') : this.#e.removeAttribute(e));
		});
	}
}
class l {
	#e;
	constructor(e) {
		this.#e = e;
	}
	apply(e) {
		Object.entries(e).forEach(([e, t]) => {
			this.#e.setAttribute(e, t);
		});
	}
}
class r {
	#e;
	constructor(e) {
		this.#e = e;
	}
	apply(e) {
		Object.entries(e).forEach(([e, t]) => {
			const n = e.replace(/([A-Z])/g, '-$1').toLowerCase();
			this.#e.style[n] = t;
		});
	}
}
class a {
	#e;
	#n;
	constructor(a = 'div', i = {}) {
		this.#s(a),
			(this.#e = document.createElement(a)),
			(this.#n = {
				accessibility: new e(this.#e),
				contents: new t(this.#e),
				events: new n(this.#e),
				state: new s(this.#e),
				general: new l(this.#e),
				style: new r(this.#e)
			}),
			this.#l(i);
	}
	#s(e) {
		try {
			return document.createElement(e), !0;
		} catch (t) {
			throw new Error(`Invalid HTML tag name: ${e} - ${t}`);
		}
	}
	#l(e) {
		Object.entries(this.#n).forEach(([t, n]) => {
			e[t] && n.apply(e[t]);
		});
	}
	getElement() {
		return this.#e;
	}
}
export { a as default };