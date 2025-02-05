import React from 'react';
import { 
    FormField, 
    FormItem, 
    FormControl, 
    FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Control } from 'react-hook-form';

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
}

interface CustomInputProps {
    control: Control<any>;
    name: string;
    fieldType: FormFieldType;
    label?: string;
    placeholder?: string;
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
                    />
                </FormControl>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea
                        {...field}
                        placeholder={props.placeholder}
                        className="field-input"
                    />
                </FormControl>
            );
    }
}

const CustomInput = (props: CustomInputProps) => {
    const { control, name } = props;
  return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <RenderField field={field} props={props} />
                <FormMessage />
            </FormItem>
        )}
    />
  )
}

export default CustomInput