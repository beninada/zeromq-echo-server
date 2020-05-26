const zmq = require("zeromq");

async function run() {
  const sock = new zmq.Request;

  sock.connect("tcp://127.0.0.1:3000");

  await sock.send("Echo");
  const [result] = await sock.receive();

  console.log(result);
}

run();
