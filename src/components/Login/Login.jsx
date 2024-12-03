import { useState } from 'react';
import { TextField, Button, Typography, Box, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };


    return (
        <Box className="min-h-screen bg-cover bg-center items-center justify-center flex flex-row select-none" style={{ backgroundImage: `url('src/imgs/fundo.jpg')` }}>
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Transparência preta
                    zIndex: 1,
                }}
            ></Box>
            <Box
                className="p-20 rounded-3xl shadow-lg"
                sx={{ width: '100%', maxWidth: 400, zIndex: 2, bgcolor:"rgba(66, 156, 146, .8)" }}
            >
                <img
                    alt="Your Company"
                    src="src/imgs/logo.png"
                    className="h-20 w-auto"
                />
                <form>
                    <div className="mb-2">
                        <TextField
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "white",
                                    "&:hover fieldset": {
                                        boxShadow: "0 4px 4px rgba(0, 0, 0, .5)",
                                        borderColor: "#429C92"
                                    },
                                    "&.Mui-focused fieldset": {
                                        boxShadow: "0 4px 4px rgba(0, 0, 0, .5)",
                                        borderColor: "#5A958C",
                                    }
                                },
                            }}
                            label="Login"
                            type="text"
                            fullWidth
                            required
                            variant="outlined"
                            margin="normal"
                            InputLabelProps={{
                                sx: {
                                    color: 'white', // Cor padrão do label
                                    '&.Mui-focused': {
                                        color: 'white', // Cor do label quando o campo está em foco
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "white",
                                    "&:hover fieldset": {
                                        boxShadow: "0 4px 4px rgba(0, 0, 0, .5)",
                                        borderColor: "#429C92"
                                    },
                                    "&.Mui-focused fieldset": {
                                        boxShadow: "0 4px 4px rgba(0, 0, 0, .5)",
                                        borderColor: "#5A958C",
                                    }
                                },
                            }}
                            label="Senha"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            required
                            variant="outlined"
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: 'white', // Cor padrão do label
                                    '&.Mui-focused': {
                                        color: 'white', // Cor do label quando o campo está em foco
                                    },
                                },
                            }}

                        />
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="mb-4 hover:bg-blue-600 transition-all duration-200"
                    >
                        Entrar
                    </Button>

                </form>
                <Typography
                    variant="body2"
                    align="center"
                    className="text-white-100 mt-4"
                >
                    Ainda não tem uma conta?{' '}
                    <a href="#" className="text-tertiary-100 hover:underline">
                        Cadastrar
                    </a>
                </Typography>
            </Box>
        </Box>
    );
};

export default Login;
