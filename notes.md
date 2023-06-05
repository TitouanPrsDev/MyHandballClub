# NOTES

## UI guidelines
### Font sizes
- Small : .9rem / 1rem / 1.1rem
- Breadcrumb : .95rem
- Titles :
    - 1.5rem - 600 - mb2rem
    - 1.3rem - 600 - mb1.5rem
    - 1.15rem - 500 - mb1.5rem

### Margins / paddings

## Fetch a request :
```js
const func = async (req, res) => {
    const response = await fetch(uri);
    const users = await response.json();
}
```

Delete all :not() in CSS