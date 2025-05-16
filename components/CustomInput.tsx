/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
    FormField,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from '@/components/ui/select';
import { Control } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@radix-ui/react-label';

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    SELECT = 'select',
    SWITCH = 'switch',
    RADIO = 'radio'
}

interface CustomInputProps {
    control: Control<any>;
    name: string;
    fieldType: FormFieldType;
    label?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    options?: { label: string; value: string }[]; 
    disabled?: boolean; 
}

const RenderField = ({ field, props }: { field: any; props: CustomInputProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <FormControl>
                    <Input 
                    {...field} 
                    placeholder={props.placeholder} 
                    className="field-input" 
                    disabled={props.disabled} 
                    onChange={(e) => {
                        field.onChange(e);
                        props.onChange?.(e);
                    }}
                    type={props.type}
                    />
                </FormControl>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea {...field} placeholder={props.placeholder} className="field-input" disabled={props.disabled} />
                </FormControl>
            );
        case FormFieldType.SELECT:
            return (
                <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={props.disabled}>
                        <SelectTrigger className="shad-select-trigger">
                            <SelectValue placeholder={props.placeholder} />
                        </SelectTrigger>
                        <SelectContent className="shad-select-content">
                            {props.options?.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormControl>
            );
        case FormFieldType.SWITCH:
            return (
                <FormItem className="flex items-center space-x-2">
                <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} disabled={props.disabled} />
                </FormControl>
                </FormItem>
            );
            case FormFieldType.RADIO:
         return (
           <FormControl>
             <RadioGroup
               value={field.value}
               onValueChange={field.onChange}
               disabled={props.disabled}
               className="flex flex-col gap-3 sm:flex-row sm:gap-6"
             >
               {props.options?.map((option) => (
                 <div
                   key={option.value}
                   className="flex items-center space-x-2 p-2 border rounded-md hover:border-primary cursor-pointer transition-colors"
                 >
                   <RadioGroupItem
                     value={option.value}
                     id={option.value}
                   />
                   <Label
                     htmlFor={option.value}
                     className={`cursor-pointer py-1 px-3 rounded-md border border-input peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all`}
                   >
                     {option.label}
                   </Label>
                 </div>
               ))}
             </RadioGroup>
           </FormControl>
         );
              
        default:
            return null;
    }
}

const CustomInput = (props: CustomInputProps) => {
    const { control, name, label } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel className="field-label">{label}</FormLabel>}
                    <RenderField field={field} props={props} />
                    <FormMessage className="text-red-500" />
                </FormItem>
            )}
        />
    );
};

export default CustomInput;
