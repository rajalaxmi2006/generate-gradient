# 🎨 Random Gradient Generator

A simple and interactive web app that generates beautiful random CSS gradients with a single click. Perfect for designers and developers who want quick gradient inspiration.

---

## 🚀 Live Demo
👉 https://your-username.github.io/random-gradient-generator/

---

## 📌 Features

- 🎲 Generate random gradients instantly  
- 🎨 Live preview of gradient  
- 📋 Displays CSS `linear-gradient` code  
- ⚡ Fast and lightweight  
- 💻 Beginner-friendly project  

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📂 Project Structure
```
│── index.html
│── style.css
│── script.js
│── README.md
```


---

## ⚙️ How It Works

1. Click the **"Generate Gradient"** button  
2. Two random RGB colors are generated  
3. A CSS `linear-gradient` is created  
4. The gradient is applied to the preview box  
5. The gradient code is displayed  

---

## 🧠 Core Logic

```javascript
function getRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}
```

## 💡 Future Improvements

- 🎯 Add gradient direction control (top, left, diagonal, etc.)
- 🎨 Support multi-color gradients (3 or more colors)
- 📋 Add "Copy to Clipboard" button for CSS code
- 🌙 Implement dark mode UI
- 📱 Improve responsiveness for mobile devices
- 💾 Save favorite gradients (local storage)
- 🔄 Add gradient history feature
- 🎛️ Add custom color picker inputs

## 🤝 Contributing

Contributions are welcome and appreciated!

### How to contribute:

1. Fork the repository  
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/random-gradient-generator.git
   ```

   
---

### ⭐ Support

If you like this project:

- ⭐ Star the repository  
- 🍴 Fork it and build your own version  
- 🐛 Report bugs by opening an issue  
- 💡 Suggest new features  

Your support helps improve the project!
