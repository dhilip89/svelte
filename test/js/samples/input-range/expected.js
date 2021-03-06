/* generated by Svelte vX.Y.Z */
import { addListener, assign, createElement, detachNode, init, insert, proto, removeListener, setAttribute, toNumber } from "svelte/shared.js";

function create_main_fragment(component, ctx) {
	var input;

	function input_change_input_handler() {
		component.set({ value: toNumber(input.value) });
	}

	return {
		c() {
			input = createElement("input");
			addListener(input, "change", input_change_input_handler);
			addListener(input, "input", input_change_input_handler);
			setAttribute(input, "type", "range");
		},

		m(target, anchor) {
			insert(target, input, anchor);

			input.value = ctx.value;
		},

		p(changed, ctx) {
			if (changed.value) input.value = ctx.value;
		},

		d(detach) {
			if (detach) {
				detachNode(input);
			}

			removeListener(input, "change", input_change_input_handler);
			removeListener(input, "input", input_change_input_handler);
		}
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;