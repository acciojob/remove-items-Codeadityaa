//your JS code here. If required.
// 1. Button aur Dropdown menu elements ko select karein
const removeButton = document.querySelector('input[type="button"]');
const colorDropdown = document.getElementById("colorSelect");

// 2. Button par click hone ka event listener lagayein
removeButton.addEventListener("click", () => {
    // 3. Check karein ki dropdown me koi option select hai ya nahi
    if (colorDropdown.selectedIndex !== -1) {
        // 4. Selected option ko index number ke zariye remove karein
        colorDropdown.remove(colorDropdown.selectedIndex);
    }
});
