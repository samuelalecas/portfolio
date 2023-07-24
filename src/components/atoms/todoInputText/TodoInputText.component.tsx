interface inputTextProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement> ) => void;
}

export const TodoInputText: React.FC<inputTextProps> = ({value, onChange}) => {
  return (
    <input
    type="text"
    className="rounded-sm bg-slate-100 w-full pl-4"
    value={value}
    onChange={onChange}
  />
  )
}
