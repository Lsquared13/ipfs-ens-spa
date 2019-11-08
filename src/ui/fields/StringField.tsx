import React, { FunctionComponent, ReactElement, Fragment } from 'react';
import { FieldProps, inputUpdater, displayLabel } from './shared'
import TextField from './TextField';

interface Props extends FieldProps {
    value: string
    onChange: (newVal: string) => void
    input?: ReactElement
    placeholder?: string
}

const StringField: FunctionComponent<Props> = ({ value, onChange, name, displayName, ...props }) => {

    const update = inputUpdater(onChange);

    return (
        <div className="row form-group">
            <div className="col-sm-12 col-md-12">
                <div className=" input-group-wrapper">
                    <label className=" input-group">
                        <div>
                            <div className="input-group">
                                <div className="input-group-header">{displayName}</div>
                                <TextField type='text'
                                    id={name}
                                    name={name}
                                    value={value}
                                    disabled={props.disabled}
                                    placeholder={props.placeholder}
                                    onChange={update}
                                />
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>

    )
}

StringField.defaultProps = { disabled: false }

export default StringField;