'use client'

import { useCallback } from "react";
import useUser from "../hooks/useUser";
import { useRouter } from "next/navigation";
import Image from "next/image";

type AvatarProps = {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
};

export const Avatar = (props: AvatarProps) => {
  const { userId } = props;
  const { data: user } = useUser({ userId: props.userId });
  const router = useRouter();

  const onClick = useCallback((event: any) => {
    event.stopPropagation(); // stop propagation to parent elements

    const url = `/users/${userId}`;
    router.push(url);
  }, [userId, router])

  return <div
    className={`
      ${props.hasBorder ? 'border-4 border-black' : ''}
      ${props.isLarge ? 'h-32' : 'h-12'}
      ${props.isLarge ? 'w-32' : 'w-12'} 
      rounded-full
      hover:opacity-80
      transition
      cursor-pointer
      relative
    `}
  >
    <Image
      fill
      style={{
        objectFit: 'cover',
        borderRadius: '100%'
      }}
      alt="Avatar"
      onClick={onClick}
      src={user?.profileImage || '/images/placeholder.png'}
    />
  </div>;
};
