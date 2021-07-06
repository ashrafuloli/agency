# Cart Plus Minus

## Html Markup

```html
<!-- circle-progress start -->
<div class="cart-plus-minus">
    <input type="text" class="input-text qty text" step="1" min="0" />
</div>
<!-- circle-progress end -->
```

## Js Code

```js
// cart-plus-minus
$(".cart-plus-minus").append(
    '<div class="qtybutton minus"><i class="far fa-minus"></i></div><div class="qtybutton plus"><i class="far fa-plus"></i></div>'
);

$(".cart-plus-minus").on(
    "click",
    ".qtybutton.plus, .qtybutton.minus",
    function () {
        // Get current quantity values
        let qty = $(this).closest(".cart-plus-minus").find(".qty");
        let val = parseFloat(qty.val());
        let max = parseFloat(qty.attr("max"));
        let min = parseFloat(qty.attr("min"));
        let step = parseFloat(qty.attr("step"));

        // Change the value if plus or minus
        if ($(this).is(".plus")) {
            if (max && max <= val) {
                qty.val(max);
            } else {
                qty.val(val + step).trigger("change");
            }
        } else {
            if (min && min >= val) {
                qty.val(min);
            } else if (val > 1) {
                qty.val(val - step).trigger("change");
            }
        }
    }
);
```
