import asyncio
import websockets

clients = set()

async def handler(websocket):
    print("🟢 Client connecté")
    clients.add(websocket)

    try:
        async for message in websocket:
            print(f"📩 Reçu : {message}")

            # Renvoie le message à tous les clients
            for client in clients:
                if client.open:
                    await client.send(f"Echo : {message}")

    except websockets.exceptions.ConnectionClosed:
        print("🔴 Client déconnecté")

    finally:
        clients.remove(websocket)

async def main():
    print("🚀 Serveur WebSocket lancé sur ws://localhost:8765")
    async with websockets.serve(handler, "localhost", 8765):
        await asyncio.Future()  # run forever

asyncio.run(main())
