import IRoom from "@/interfaces/IRoom";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RoomCard({ room }: { room: IRoom }) {
  return (
    <Link href={`chat/${room.id}`} className="flex gap-3 items-center p-2">
      <div>
        <Image
          src={room.imageUrl}
          height={50}
          width={50}
          style={{ objectFit: "cover", height: 50, borderRadius: 50 }}
          alt="profile"
        />
      </div>
      <div>
        <p className="text-lg font-medium">{room.title}</p>
        <p className="text-sm text-slate-400">Recent message</p>
      </div>
    </Link>
  );
}

export default RoomCard;