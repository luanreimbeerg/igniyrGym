import { IImageProps, Image } from "native-base";

type Props = IImageProps & {
  size: number;
};

export default function UserPhote({ size, ...rest }: Props) {
  return (
    <Image
      w={size}
      h={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
      alt="imagem do usuário"
      {...rest}
    />
  );
}
