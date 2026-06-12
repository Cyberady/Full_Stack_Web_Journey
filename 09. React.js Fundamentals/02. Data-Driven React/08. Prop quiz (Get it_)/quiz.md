# React Props Quiz Answers

## 1. What do props help us accomplish?

Props help us make components more reusable and dynamic by allowing us to pass data from a parent component to a child component.

---

## 2. How do you pass a prop into a component?

You pass props as attributes when rendering a component.

```jsx
<MyAwesomeHeader title="Hello World!" />
```

---

## 3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? Why or why not?

No. Custom props should not be passed directly to native DOM elements like `<div>` because HTML elements only recognize standard HTML attributes. Custom props are intended for React components.

```jsx
<MyComponent blahblahblah={true} />
```

---

## 4. How do I receive props in a component?

Props are received as an object parameter in the component function.

```jsx
function Navbar(props) {
    return (
        <header>
            {props.title}
        </header>
    )
}
```

You can also use destructuring:

```jsx
function Navbar({ title }) {
    return (
        <header>
            {title}
        </header>
    )
}
```

---

## 5. What data type is `props` when the component receives it?

`props` is an object.

Example:

```jsx
<MyComponent name="Aditya" age={20} />
```

React receives:

```jsx
props = {
    name: "Aditya",
    age: 20
}
```