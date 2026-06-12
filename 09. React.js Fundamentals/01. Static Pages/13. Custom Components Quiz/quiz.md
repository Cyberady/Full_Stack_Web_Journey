## 1. What is a React component?

A React component is a **JavaScript function that returns JSX (React elements).**

---

## 2. What's wrong with this code?

```jsx
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

**Answer:** The component name starts with a lowercase letter. React component names must begin with an uppercase letter.

**Correct code:**

```jsx
function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

---

## 3. What's wrong with this code?

```jsx
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

**Answer:** The component is being called like a normal function. React components should be rendered using JSX.

**Correct code:**

```jsx
root.render(<Header />)
```