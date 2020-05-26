const zmq = require("zeromq");

async function run() {
  const sock = new zmq.Reply;

  await sock.bind("tcp://127.0.0.1:3000");

  console.log("Awaiting messages at tcp://127.0.0.1:3000...");

  for await (const [message] of sock) {
    console.log("Received message %s", message);
    await sock.send(message);
  }
}

run();
