/*
* Breadcrumbs
*/

'use strict';

function breadcrumbs(selector) {
    const breadcrumbs = document.querySelectorAll(selector);
    // breadcrumbs.forEach((breadcrumb) => {
    for (let i = 0; i < breadcrumbs.length; i++) {
        breadcrumbs[i].addEventListener('click', function(e) {
            const steps = this.querySelectorAll('a');
            const newActiveStep = e.target;
            let isActive = false;
            for (let i = 0; i < steps.length; i++) {
                if (steps[i] == newActiveStep) {
                    steps[i].className = 'breadcrumbs--active';
                    isActive = true;
                } else {
                    steps[i].className = isActive ? '' : 'breadcrumbs--before';
                }
            }
        });
    }
    // });
}
