<?php
header("Access-Control-Allow-Origin: *");
// Overíme, či bol formulár odoslaný pomocou POST metódy (nie GET)
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // 1. Honeypot ochrana: skryté pole, ktoré by nemal človek nikdy vyplniť
    if (!empty($_POST['website'])) {
        echo "Spam detekovaný.";
        exit;
    }

    // 2. Časová ochrana proti botom: overíme, že formulár nebol odoslaný okamžite po načítaní
    $formLoadTime = isset($_POST['form_load_time']) ? (int)$_POST['form_load_time'] : 0;
    $currentTime = round(microtime(true) * 1000); // aktuálny čas v milisekundách

    if ($formLoadTime === 0 || ($currentTime - $formLoadTime) < 3000) {
        echo "Formulár bol odoslaný príliš rýchlo.";
        exit;
    }

    // 3. Načítanie údajov z formulára + sanitizácia (ochrana pred XSS útokmi)
    $name = htmlspecialchars(trim($_POST['user_name']));
    $email = htmlspecialchars(trim($_POST['user_email']));
    $message = htmlspecialchars(trim($_POST['user_message']));
    $budget = isset($_POST['budget']) ? htmlspecialchars(trim($_POST['budget'])) : "Not specified";

    // Checkbox: viacero služieb – prevedieme na čitateľný text
    $services = isset($_POST['services']) && is_array($_POST['services']) 
        ? implode(", ", array_map('htmlspecialchars', $_POST['services'])) 
        : "None";

    // 4. Validácia – kontrola správnosti vstupov
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Neplatný email.";
        exit;
    }

    if (empty($name) || empty($message)) {
        echo "Meno a správa sú povinné.";
        exit;
    }

    // 5. Príprava emailu
    $to = "studio@oukline.com"; // ← Tu zadaj svoju e-mailovú adresu
    $subject = "Nová správa z portfólia";

    $headers = "From: portfolio@filipmonis.online\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8";

    // Text emailu
    $body = "Meno: $name\n";
    $body .= "Email: $email\n";
    $body .= "Rozpočet: $budget\n";
    $body .= "Služby: $services\n\n";
    $body .= "Správa:\n$message\n";

    // 6. Odoslanie emailu
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "Chyba pri odoslaní emailu.";
    }

} else {
    // Neplatný prístup (nie cez POST)
    echo "Formulár nebol odoslaný.";
}
?>