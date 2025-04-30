<?php
// Skontrolujeme, či bol formulár odoslaný
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Kontrola honeypot poľa
    if (!empty($_POST['website'])) {
        die("Spam detekovaný.");
    }

    // Kontrola time poľa
    $formLoadTime = isset($_POST['form_load_time']) ? (int)$_POST['form_load_time'] : 0;
    $currentTime = round(microtime(true) * 1000);
    $timeDiff = $currentTime - $formLoadTime;

    if ($formLoadTime === 0 || $timeDiff < 3000) {
        die("Formulár bol odoslaný príliš rýchlo. Pravdepodobne bot.");
    }

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
    $to = "dybbuk210@gmail.com";
    $subject = "Správa z portfólia";
    $headers = "From: portfolio@filipmonis.online\r\n"; // opravený medzera
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8";

    $email_body = "Meno: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Správa:\n$message\n";

    // 4. Odoslanie emailu
    if (mail($to, $subject, $email_body, $headers)) {
        header("Location: thank__you.html");
        exit();
    } else {
        error_log("E-mail sa nepodarilo odoslať: " . error_get_last()['message']);
        die("Nepodarilo sa odoslať správu. Skúste to znova.");
    }
} else {
    die("Formulár nebol odoslaný správne.");
}
?>