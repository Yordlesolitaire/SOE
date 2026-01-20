import asyncio
import websockets

async def test():
    async with websockets.connect("ws://localhost:8765") as ws:
        await ws.send("Hello serveur")
        response = await ws.recv()
        print(response)

asyncio.run(test())
