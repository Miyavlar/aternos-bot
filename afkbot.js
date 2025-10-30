import { createClient } from 'bedrock-protocol';

function connectBot() {
  const client = createClient({
    host: 'altib.aternos.me',
    port: 4094,
    username: 'VuranıBanlarım'
  });

  client.on('connect', () => {
    console.log('✅ Bot sunucuya bağlandı!');
  });

  client.on('disconnect', (reason) => {
    console.log('⚠️ Bağlantı koptu, 5 saniye sonra yeniden denenecek...');
    setTimeout(connectBot, 5000);
  });

  client.on('error', (err) => {
    console.log('❌ Hata oluştu:', err.message);
  });
}

connectBot();
