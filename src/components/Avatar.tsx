import React from "react";

interface AvatarProps {
  name: string;
  picture?: string;
  size: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name, picture, size }) => {
  const nameSplit = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  const initial =
    nameSplit.charAt(0).toUpperCase() +
    nameSplit.charAt(nameSplit.length - 1).toUpperCase();
  console.log(initial);
  const noPic = picture === "";
  let borderSize = "";
  let textSize = "";

  if (size === "xs") {
    borderSize = "h-8 w-8 border-2";
    textSize = "text-[0.75rem]";
  } else if (size === "sm") {
    borderSize = "h-12 w-12 border-2";
    textSize = "text-[1rem]";
  } else if (size === "md") {
    borderSize = "h-16 w-16 border-4";
    textSize = "text-[1.5rem]";
  } else if (size === "lg") {
    borderSize = "h-20 w-20 border-4";
    textSize = "text-[2rem]";
  }

  return (
    <>
      <div
        className={`flex bg-gray-300 border-white rounded-full justify-center items-center ${borderSize}`}
      >
        {!noPic && (
          <img src={picture} alt="" className="rounded-full h-full w-full" />
        )}
        {noPic && <span className={`uppercase ${textSize}`}>{initial}</span>}
      </div>
    </>
  );
};

interface AvatarGroupProps {
  users: Array<{ name: string; picture?: string }>;
  maxLength: number;
  size: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  users,
  maxLength,
  size,
}) => {
  const visibleUsers = users.slice(0, maxLength);
  const excessUsers = users.length - maxLength;

  let borderSize = "";
  let textSize = "";

  if (size === "xs") {
    borderSize = "h-8 w-8 border-2";
    textSize = "text-[0.75rem]";
  } else if (size === "sm") {
    borderSize = "h-12 w-12 border-2";
    textSize = "text-[1rem]";
  } else if (size === "md") {
    borderSize = "h-16 w-16 border-4";
    textSize = "text-[1.5rem]";
  } else if (size === "lg") {
    borderSize = "h-20 w-20 border-4";
    textSize = "text-[2rem]";
  }

  return (
    <div className="flex -space-x-4 hover:-space-x-1 hover:cursor-pointer">
      {visibleUsers.map((user, index) => (
        <div title={user.name} className="duration-300 active:scale-75">
          <Avatar
            key={index}
            name={user.name}
            picture={user.picture}
            size={size}
          />
        </div>
      ))}
      {excessUsers > 0 && (
        <div
          title={`see ${excessUsers} more...`}
          className={`flex bg-gray-300 border-white rounded-full justify-center items-center duration-300 active:scale-75 ${borderSize}`}
        >
          <span className={`uppercase ${textSize}`}>{`+${excessUsers}`}</span>
        </div>
      )}
    </div>
  );
};
