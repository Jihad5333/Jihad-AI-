// كود بسيط لمعالجة نموذج التواصل
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            document.getElementById("formResult").textContent = "تم إرسال رسالتك بنجاح. شكرًا لتواصلك!";
            form.reset();
        });
    }
});
