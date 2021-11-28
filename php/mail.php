<?php
/* Отправка формы через Telegram */

/* https://api.telegram.org/bot1504260997:AAFQ0b0jl0_RYNc_4lsgnXrhzGGrlkzTZJ8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$token = "1504260997:AAFQ0b0jl0_RYNc_4lsgnXrhzGGrlkzTZJ8";
$chat_id = "-338113757";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email ' => $email,
  'Тема ' => $subject,
  'Сооющение: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../thanks.html');
}
  else {
  echo "Error";
}
?>
