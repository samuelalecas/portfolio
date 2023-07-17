interface CenterLayoutProps {
    children: any,
    width: string;
    bgColor?: string;
}

export const CenterLayout: React.FC<CenterLayoutProps> = ({children, width, bgColor = "bg-white"}) => {
  return (
    <div className={`${bgColor} p-4 w-full h-full flex justify-center items-center`}>
      <div className={`w-[${width}px] flex justify- items-center`}>
        {children}
      </div>
    </div>
  );
};
