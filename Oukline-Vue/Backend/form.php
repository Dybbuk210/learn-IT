<?php
// 1. Overenie metódy
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // 2. Honeypot ochrana
    if (!empty($_POST['website'])) {
        die("Spam detekovaný.");
    }

    // 3. Kontrola rýchlosti (time diff)
    $formLoadTime = isset($_POST['form_load_time']) ? (int)$_POST['form_load_time'] : 0;
    $currentTime = round(microtime(true) * 1000);
    $timeDiff = $currentTime - $formLoadTime;

    if ($formLoadTime === 0 || $timeDiff < 3000) {
        die("Formulár bol odoslaný príliš rýchlo. Pravdepodobne bot.");
    }

    // 4. Načítanie údajov
    $name = htmlspecialchars(trim($_POST['user_name']));
    $email = htmlspecialchars(trim($_POST['user_email']));
    $message = htmlspecialchars(trim($_POST['user_message']));
    $budget = isset($_POST['budget']) ? htmlspecialchars(trim($_POST['budget'])) : "Not specified";

    $services = isset($_POST['services']) && is_array($_POST['services'])
        ? implode(", ", array_map('htmlspecialchars', $_POST['services']))
        : "None selected";

    // 5. Validácia
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Neplatná emailová adresa.");
    }

    if (empty($name) || empty($message)) {
        die("Všetky polia musia byť vyplnené.");
    }

    // 6. Príprava emailu
    $to = "dybbuk210@gmail.com"; // ← Zmeň podľa potreby
    $subject = "Nová správa z kontaktného formulára";
    $headers = "From: portfolio@filipmonis.online\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8";

    $email_body = "Meno: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Rozpočet: $budget\n";
    $email_body .= "Služby: $services\n\n";
    $email_body .= "Správa:\n$message\n";

    // 7. Odoslanie
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Správa bola úspešne odoslaná.";
    } else {
        error_log("Chyba pri odosielaní e-mailu: " . error_get_last()['message']);
        die("Nepodarilo sa odoslať správu.");
    }
} else {
    die("Formulár nebol odoslaný správne.");
}
?>