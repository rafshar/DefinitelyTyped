import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// Sidenav
// $ExpectType Sidenav
new materialize.Sidenav(elem);
// $ExpectType Sidenav
const sidenav = new materialize.Sidenav(elem, {
    edge: "left",
    inDuration: 300,
    onCloseStart(el) {
        // $ExpectType Sidenav
        this;
        // $ExpectType Element
        el;
    }
});
// $ExpectType void
sidenav.open();
// $ExpectType void
sidenav.destroy();
// $ExpectType SidenavOptions
sidenav.options;
// $ExpectType Element
sidenav.el;
// $ExpectType boolean
sidenav.isOpen;

// Tabs
// $ExpectType Tabs
const tabs = new materialize.Tabs(elem, {
    duration: 200,
    onShow(content) {
        // $ExpectType Tabs
        this;
        // $ExpectType Element
        content;
    }
});
// $ExpectType void
tabs.destroy();
// $ExpectType void
tabs.select("id");
// $ExpectType TabsOptions
tabs.options;
// $ExpectType number
tabs.index;

// Modal
// $ExpectType Modal
new materialize.Modal(elem);
// $ExpectType Modal
const modal = new materialize.Modal(elem, {
    inDuration: 300,
    ready(el, trigger) {
        // $ExpectType Modal
        this;
        // $ExpectType Element
        el;
        // $ExpectType Element
        trigger;
    }
});
// $ExpectType void
modal.open();
// $ExpectType void
modal.destroy();
// $ExpectType ModalOptions
modal.options;
// $ExpectType Element
modal.el;
// $ExpectType boolean
modal.isOpen;
