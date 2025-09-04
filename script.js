document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (!contactForm) return;

    const prefixSelect = document.getElementById('phone-prefix');
    const restInput = document.getElementById('phone-rest');
    const fullPhoneInput = document.getElementById('full-phone');
    const phoneError = document.getElementById('phone-error');

    // 1. לאכוף קלט מספרי בלבד בשדה המספר
    restInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // 2. אימות ואיחוד המספר לפני שליחת הטופס
    contactForm.addEventListener('submit', function(e) {
        // ניקוי שגיאות קודמות
        phoneError.textContent = '';
        restInput.setCustomValidity('');

        const prefix = prefixSelect.value;
        const rest = restInput.value;
        const totalLength = prefix.length + rest.length;
        let isValid = true;
        let errorMessage = '';

        // בדיקה בסיסית: החלק השני של המספר חייב להכיל 7 ספרות
        if (rest.length !== 7) {
            isValid = false;
            errorMessage = 'יש להזין 7 ספרות לאחר הקידומת.';
        }
        
        // בדיקה מתקדמת יותר לפי סוג הקידומת
        if (isValid) {
            if (prefix.startsWith('05') && totalLength !== 10) {
                 isValid = false;
                 errorMessage = 'מספר סלולרי ישראלי צריך להכיל 10 ספרות בסך הכל.';
            } else if (['02', '03', '04', '08', '09'].includes(prefix) && totalLength !== 9) {
                isValid = false;
                errorMessage = 'מספר קווי ישראלי צריך להכיל 9 ספרות בסך הכל.';
            }
        }

        if (isValid) {
            // אם המספר תקין, נאחד אותו ונכניס לשדה המוסתר
            fullPhoneInput.value = prefix + rest;
            // הטופס יישלח כרגיל
        } else {
            // אם המספר אינו תקין, נמנע את השליחה ונציג שגיאה
            e.preventDefault();
            phoneError.textContent = errorMessage;
            // setCustomValidity עוזר להציג את ממשק השגיאה המובנה של הדפדפן
            restInput.setCustomValidity(errorMessage);
        }
    });

    // אופציונלי: ניקוי הודעת השגיאה בזמן שהמשתמש מתקן את הקלט
    restInput.addEventListener('input', () => {
        restInput.setCustomValidity('');
        phoneError.textContent = '';
    });
});