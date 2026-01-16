<?php
// PHP Script für IONOS (und andere Hoster)
// Platzieren Sie diese Datei im Hauptverzeichnis (public) Ihrer React App.

// CORS erlauben (wichtig, falls React lokal auf einem anderen Port läuft)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Nur POST Anfragen erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// JSON Daten empfangen
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Keine Daten empfangen"]);
    exit;
}

// --- KONFIGURATION ---
// Hier die Empfänger-Adresse eintragen:
$to = "qnl@baugrundstueck-meerbusch.de"; 

// Betreff der E-Mail
$subject = "Neue Anfrage: Investment-Memorandum QNL";

// Daten aus dem Formular bereinigen
$company = htmlspecialchars($data['company'] ?? '-');
$representative = htmlspecialchars($data['representative'] ?? '-');
$address = htmlspecialchars($data['address'] ?? '-');
$zipCity = htmlspecialchars($data['zipCity'] ?? '-');
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data['phone'] ?? '-');

// E-Mail Inhalt aufbauen
$message = "Neue Anfrage über das Investment-Memorandum Formular:\n\n";
$message .= "--------------------------------------------------\n";
$message .= "Firma:         " . $company . "\n";
$message .= "Vertreter:     " . $representative . "\n";
$message .= "Adresse:       " . $address . "\n";
$message .= "PLZ/Ort:       " . $zipCity . "\n";
$message .= "E-Mail:        " . $email . "\n";
$message .= "Telefon:       " . $phone . "\n";
$message .= "--------------------------------------------------\n\n";
$message .= "Der Nutzer hat den Datenschutz-, Vertraulichkeits- und Provisionsbestimmungen zugestimmt.";

// Header setzen
// WICHTIG: 'From' sollte eine E-Mail Adresse sein, die beim Hoster existiert (z.B. no-reply@deine-domain.de),
// sonst blockieren SPAM-Filter das oft.
$fromEmail = "no-reply@" . $_SERVER['SERVER_NAME']; 
$headers = "From: " . $fromEmail . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// E-Mail senden
if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "E-Mail gesendet"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Fehler beim Senden der E-Mail"]);
}
?>