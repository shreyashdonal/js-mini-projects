# Weather App Project Notes

## Errors You Might Face

1. When you select an image tag using `getElementsByTagName`, it returns a collection of all images. Because of this, when you try to change images according to weather conditions, it will not work as expected.
   👉 Instead, use a class with `querySelector` to target a specific image.

2. When setting the `src` using `setAttribute`, always use the full path.
   👉 Example: `images/clouds.png`

---

## New Things I Learned in This Project

### 1) CSS

i) `margin-top: -5px;`
➡ It means the element will move **upward by 5px**.

ii) `flex: 1;`
➡ The input is inside a flex container (`search`).
➡ `flex: 1` means the input will take up all the **remaining available space** inside the container.

iii)Removing default css of input element

```css
search input {
  border: 0;   /* Removes default input border */
  outline: 0;  /* Removes blue highlight when input is clicked */
}
```

iv)

```css
background: linear-gradient(135deg, #00feba, #5b548a);
```

➡ Syntax: `linear-gradient(direction, color1, color2, ...)`
➡ The `135deg` controls the **angle/direction of the gradient line**.

v) max-width: 470px;
➡ If the screen size becomes very large (e.g., 1000px), the element might stretch too much.
➡ Using `max-width: 470px` ensures that **no matter the screen size, the width will not exceed 470px**, keeping the design consistent.



## Summary

This project helped me understand:

* Proper DOM selection techniques
* Handling image sources dynamically
* Practical CSS concepts like flexbox, gradients, and layout control
