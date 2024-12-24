<?php
// Skontrolujeme, či bol formulár odoslaný
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Načítanie údajov z formulára
    $name = htmlspecialchars(trim($_POST['user_name']));
    $email = htmlspecialchars(trim($_POST['user_email']));
    $message = htmlspecialchars(trim($_POST['user_message']));

    // 2. Validácia údajov
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Neplatná emailová adresa.");
    }
    if (empty($name) || empty($message)) {
        die("Všetky polia musia byť vyplnené.");
    }

    // 3. Príprava emailu
    $to = "dybbuk210@gmail.com"; // Nahraď svojím emailom
    $subject = "Sprava s portfolia";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=utf-8";

    $email_body = "Meno: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Správa:\n$message\n";

    // 4. Odoslanie emailu
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Správa bola úspešne odoslaná.";
    } else {
        echo "Nepodarilo sa odoslať správu. Skúste to znova.";
    }
} else {
    echo "Formulár nebol odoslaný správne.";
}
?>
